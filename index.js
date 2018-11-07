var kittens = ["Milo", "Otis", "Garfield"] 

// Add your functions and code here


function destructivelyAppendKitten(name){
  kittens.push(name);
}


function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
 
 function destructivelyRemoveLastKitten(){
  kittens.pop();
  }

function destructivelyRemoveFirstKitten(){
   kittens.shift();
  }

  function appendKitten(name){
  var newArr = kittens.slice(0).pop(name);
  return newArr;
  }

 function prependKitten(name){
    var newArr = kittens.slice(0).unshift(name);
    return newArr;
  }

function removeLastKitten(){
  var len = kittens.length - 1;
  var newArr = kittens.slice(0,len);
  return newArr;
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  }

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})