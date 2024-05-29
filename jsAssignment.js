/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const carNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (carName,id,year,colour) {
    const NFTdata = {
        "carName": carName,
        "id": id,
        "year" :year,
        "colour" : colour
    }
    carNFTs.push(NFTdata);
    console.log("Minted NFT is : "+ NFTdata.carName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    let sizeOfArray = carNFTs.length;
    for(let i=0;i<sizeOfArray;i++){
        console.log("Name : "+carNFTs[i].carName);
        console.log("Year of production : "+carNFTs[i].year);
        console.log("Colour : "+carNFTs[i].colour);
        console.log("ID : "+carNFTs[i].id+"\n");
    }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log("Total number of NFTs minted : "+ carNFTs.length);
}

// call your functions below this line

mintNFT("Ferrari LaFerrari",123,2013,"red");
mintNFT("Lamborghini Aventador",934,2011,"purple");
mintNFT("Pagani Huayra",343,2012,"orange");
mintNFT("Bugatti Chiron",581,2016,"blue");

listNFTs();

getTotalSupply();
