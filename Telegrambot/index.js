const { Telegraf } = require('telegraf')
const axios = require('axios');

 

// Url of the Bot
// https://t.me/coding_code_bot

/**
 * How to get the secret token for creating a bot ?
 * Open the Telegram and search for BotFather
 * To read the instruction  carefully
 */


// we can use  (dotenv package) to hide this token
 

const bot  = new Telegraf('6830008088:AAFJNtnthdm2S3lQxqO4igmmHOa28CoGWGs');

bot.start((ctx) => ctx.reply('Welcome to the new Coding Bot by Sahil Sahu'));
bot.command('oldschool', (ctx) => ctx.reply('ha bhai old school he'));
bot.command('binary_searchtree', (ctx) => ctx.reply(binary_search_code));
bot.command('who_made_this', (ctx) => ctx.reply("Sahil Sahu") );
bot.command('code',async function(ctx){
    const response = await axios(`https://raw.githubusercontent.com/sahil2806/practice1/master/index.js`);
    ctx.reply(response.data);
})
bot.on('sticker', (ctx) => ctx.reply('👍'));

// Regular expression to detect emojis
const emojiRegex = /[\p{Emoji_Presentation}\p{Emoji}\u200d\u20e3\ufe0f]/u;
bot.on('text', (ctx) => {
    const messageText = ctx.message.text;
    if (emojiRegex.test(messageText)) {
        ctx.reply('👇');
    }
});

 


bot.launch();



let binary_search_code =   `
/**
 //Node class represents each node in the BST
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// BinarySearchTree class represents the BST itself
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Helper method to insert a node recursively
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Method to insert a node into the BST
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to search for a node recursively
    searchNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return node;
        }
    }

    // Method to search for a node in the BST
    search(data) {
        return this.searchNode(this.root, data);
    }

    // Helper method to perform inorder traversal
    inorderTraversal(node, result) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
    }

    // Method to get the inorder traversal of the BST
    inorder() {
        const result = [];
        this.inorderTraversal(this.root, result);
        return result;
    }

    // Helper method to find the minimum node in a tree
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    // Helper method to remove a node recursively
    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            // Node with only one child or no child
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Node with two children
            const aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // Method to remove a node with given data
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

console.log('Inorder traversal:', bst.inorder()); // [5, 7, 9, 10, 13, 15, 17, 22, 25, 27]

console.log('Search 17:', bst.search(17)); // Node { data: 17, left: null, right: null }

bst.remove(15);
console.log('Inorder traversal after removing 15:', bst.inorder()); // [5, 7, 9, 10, 13, 17, 22, 25, 27]


*/
`
