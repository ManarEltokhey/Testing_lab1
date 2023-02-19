const index = require("../index"); 

const assertMocha = require("assert"); 
const { after } = require("mocha");

const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should();
describe("test for capitalizeText function using mocha" , function(){
    it("test that the function takes a string and return it after capitalize it", function(){
            assertMocha.equal(index.capitalizeText('iti'), 'ITI');
           
    })
})
describe("test capitalizeText function", function(){
let counter=0;
beforeEach(()=>{
    counter++
}

)
    it.skip("with arguments - number should throw err", function(){
        expect(function(){
             ()=>index.capitalizeText(5)
            }
        ).to.throw(TypeError, " parameter should be string ")
    })
    it("test if the input iti , the returned value  will not equal to hello ", function(){
        expect(index.capitalizeText('iti')).to.be.not.equal('Hello') 
    })
    it("test that the function takes a string  it will return a string ", function(){
        expect(index.capitalizeText('iti')).to.be.a('string') 
    })

    after(()=>{
        console.log(counter)
    })



   
})

describe("test createArray using expect", function(){
    it("test that return array ", function(){
        expect(index.createArray(4)).to.be.an("array") 
    })
    it("test if we pass 3 it will return array of length 3 and test it's include 1", function(){
        expect(index.createArray(3)).to.have.lengthOf(3).that.have.includes(1)
    })
    
})