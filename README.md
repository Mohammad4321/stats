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
- name: 'Release: 1.3.0'
  id: 'Release ID: 12912828'
  date: 'Release Date: 2018-09-14T21:30:25Z'
  totalDownloads: 766
  downloads:
    - name: checksums.txt
      downloads: 16
    - name: checksums.txt.gpg
      downloads: 14
    - name: linux-i386_1.3.0_MyCrypto.AppImage
      downloads: 6
    - name: linux-x86-64_1.3.0_MyCrypto.AppImage
      downloads: 74
    - name: mac_1.3.0_MyCrypto.dmg
      downloads: 201
    - name: standalone_1.3.0_MyCrypto.zip
      downloads: 29
    - name: windows_1.3.0_MyCrypto.exe
      downloads: 426
- name: 'Release: 1.2.3'
  id: 'Release ID: 12684541'
  date: 'Release Date: 2018-09-01T01:16:06Z'
  totalDownloads: 4543
  downloads:
    - name: checksums.txt
      downloads: 94
    - name: checksums.txt.gpg
      downloads: 132
    - name: linux-i386_1.2.3_MyCrypto.AppImage
      downloads: 77
    - name: linux-x86-64_1.2.3_MyCrypto.AppImage
      downloads: 342
    - name: mac_1.2.3_MyCrypto.dmg
      downloads: 1252
    - name: standalone_1.2.3_MyCrypto.zip
      downloads: 235
    - name: windows_1.2.3_MyCrypto.exe
      downloads: 2411
...
```
