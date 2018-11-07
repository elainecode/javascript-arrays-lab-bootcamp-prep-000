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

  })

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})