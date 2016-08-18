describe("Simple Tests", function(){

  beforeEach(function() {
    console.log("This block gets run before each test within this describe");
  });

  describe("true or false", function() {

    var someBoolean;

    beforeEach(function() {
      someBoolean = true;
    });

    it("true is true", function(){
      assert.isTrue(someBoolean);
    });

    it("true is not false", function(){
      assert.isFalse(someBoolean);
    });

  });

  it("has a variable 'name' and it's equal to 'Sophie'", function() {
    assert.isEqual(name, 'Sophie');
  });

});
