```js
if (
            renderObjectArray[9].layer.selectedElement.associations != undefined
          ) {
            // console.log('SOMETHING...', renderObjectArray[9]);
            renderObjectArray[9].layer.selectedElement.associations.forEach(
              (asc) => {
                const zindex = getZIndex(asc);

                console.log('WE HAVE ZINDEX', zindex);
                renderObjectArray.splice(zindex, 0, {
                  layer: {
                    name: `Head${zindex}`,
                    blend: 'source-over',
                    opacity: 1,
                    selectedElement: {
                      id: 10000,
                      name: cleanName(asc),
                      filename: asc,
                      path: `${layersDir}/Heads/associated/${asc}`,
                      weight: 1
                    }
                  }
                });
              }
            );
          }
```


NOTE
```js
const array2 = [{name: "John", age: 26}, {name: "Jake", age: 25}, {name: "ALex", age: 35}]
if(array2.find((element => element.age == 25))) {
  let index = array2.findIndex((element => element.age == 25));
  array2.splice(index, 1)
}
console.log(array2)

```