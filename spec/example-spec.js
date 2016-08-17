describe("Simple Tests", function(){

  describe("true or false", function() {

    it("true is true", function(){
      assert.isTrue(true);
    });

    it("true is not false", function(){
      assert.isFalse(true);
    });

  });

  it("has a variable 'name' and it's equal to 'Sophie'", function() {
    assert.isEqual(name, 'Sophie');
  });

});
