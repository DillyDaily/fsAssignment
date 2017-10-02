var fs = require('fs');

// fs.readFile('./challenge1/info.txt', 'utf8', function(err, data) {
//     if (err) {
//       throw err;
//     }
//     consol.log(data)
// });

// fs.readFile('./challenge2/info.txt', 'utf8', function(err, data) {
//     if (err) {
//       throw err;
//     }
//     let names = ["Marie", "Jessica", "Charlotte", "Ali"];

        // for (let i=0; i<name.length; i++){
    
//     fs.writeFile('./challenge2/info.txt', data + names, (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log('The file has been saved!');
//   });
// })

// fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log('renamed complete!');
//   });

//   fs.mkdir('./challenge4/copyfolder.txt', (err) => {
//       if (err) {
//           throw err;
//       }

//   })

//   fs.rename('./challenge4/copyfolder.txt', './challenge4/copyfolder', (err) => {
//       if (err) {
//           throw err;
//       }
//   })

// fs.copyFile('./challenge4/info.txt', './challenge4/copyfolder', (err) => {
//     if (err) {
//         throw err;
//     }
// })


    // fs.readFile('./challenge5/info.txt', 'utf8', function(err, data) {
    //     if (err) {
    //       throw err;
    //     }
    // fs.writeFile('./challenge5/info.txt', data.replace(/-/g, " "), (err) => {
    //     if (err) {
    //       throw err;
    //     }
    //     console.log('dashes replaced!')
    //   });
    // })

    fs.readdir('./challenge6', function(err, files) {
        let arr = [];
        let txt = [];
        if (err) {
          throw err;
        }
        for (let i=0; i<files.length; i++){
            arr.push(files[i].slice(-3));
        if (arr[i] === 'txt') {
                txt.push(files[i]);
        }
        }
        console.log(txt);
    })