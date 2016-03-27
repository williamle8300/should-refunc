/**
 * shouldRefunc
 * @param bool Boolean 
 * @param func Function 
 * @param collection Array 
 **/

module.exports = shouldRefunc;

function shouldRefunc(bool, func, collection) {
	
	var item
	
	if (collection.length === 0 || !collection) {
		return
	}
	
  item = collection.shift() //['/asdf/asdf/asdf/asdf', '/zxcv/zxcv']

  function callback (err) {

    if (err) {
      throw err
    }

	  if (collection.length !== 0) {
    	shouldRefunc(true, func, collection)
	  }
    if (collection.length === 0) {
	  	shouldRefunc(false);
    }
  }

  if (bool) {
  	func(item, callback)
  }
	if (!bool) {
		return
	}
}