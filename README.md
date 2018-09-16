# stats


#### To use:

* In your terminal, run `git clone https://github.com/hahnmichaelf/stats.git`
* Cd to the new directory with `cd stats`
* Create a `config.js` file and copy-paste the following code into it:
```
module.exports = {
    'user': 'mycryptohq',
    'repo': 'mycrypto'
}
```
* Replace the `user` and `repo` fields with the github repo/user that you are wanting to assess.
* Then run `npm install` and after it has completed run `npm test`

After this, the data will have been pulled and output to data.yaml
