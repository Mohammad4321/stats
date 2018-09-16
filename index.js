const req = require('request')
const fs = require('fs')
const yaml = require('js-yaml')
const config = require('./config.js')

const f = () => {
    const options = {
        'method': 'GET',
        'headers': {
            'User-Agent': 'request'
        }
    }
    req.get('https://api.github.com/repos/' + config.user + '/' + config.repo + '/releases', options, (error, response, body) => {
        if(!error) {
            body = JSON.parse(body)
            var entities = []
            body.forEach((release) => {
                var entity = {}
                entity.name = "Release: " + release.tag_name
                entity.id = "Release ID: " + release.id
                entity.date = "Release Date: " + release.created_at
                entity.totalDownloads = 0
                if (release.assets[0]) {
                    entity.downloads = []
                    release.assets.forEach((asset) => {
                        var file = {}
                        file.name = asset.name
                        file.downloads = asset.download_count
                        entity.totalDownloads += asset.download_count
                        entity.downloads.push(file)
                    })
                    entities.push(entity)
                }
            })
            fs.writeFile('./data.yaml', yaml.safeDump(entities), 'utf8', function(err, out) {
                if(err) console.log(err)
            })
        }
        if (error) console.log("ERROR: " + error)
    });

}

f();
