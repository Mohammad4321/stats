# stats

#### Requires:

* `git` - Can be installed from https://git-scm.com/downloads
* `node.js and npm` - Can be installed from https://nodejs.org/en/ (To test that its installed, run `npm -v` and `node -v` in your terminal/command prompt window

#### To use:

* In your terminal, run `git clone https://github.com/hahnmichaelf/stats.git`
* Cd to the new directory with `cd stats`
* Edit the `config.js` file with a text-editor like notepad++ to have the correct github user/org and repository specified
* Replace the `user` and `repo` fields with the github repo/user that you are wanting to assess.
* Then run `npm install` and after it has completed run `npm test`

After this, the data will have been pulled and output to data.yaml

#### Outputs as: 
###### A YAML file that looks like the following

```
- name: 
  id: 
  date: 
  totalDownloads: 
  downloads:
    - name: 
      downloads: 
    - name: 
      downloads:
    ...
- name: 
  id:
  date:
  totalDownloads:
  downloads
      downloads: 
    - name: 
      downloads:
    - name: 
    ...
...
```
