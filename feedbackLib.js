/*{
    "sender": "John Smith",
    "message": "Great session on React components! I found the examples very helpful.",
    "rating": 5
  }
*/

let feedbackArray = [];

let nextId = 1;

function getAll() {
    return feedbackArray;
}

function addOne(sender, message, rating){
    if (!sender || !message || !rating){
        return false;
    }

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating
    };

    feedbackArray.push(newFeedback);
    return newFeedback;
}

function findById(id){
    const numericId = Number(id);
    const feedback = feedbackArray.find(item => item.id === numericId);
    if (feedback){
        return feedback;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData){
    const feedback = findById(id);
    if (feedback){
        if (updatedData.sender){
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message){
            feedback.message = updatedData.message;
        }
        if (updatedData.rating){
            feedback.rating = updatedData.rating;
        }
        return feedback;
    }
}

function deleteOneById(id){
    const feedback = findById(id);
    if (feedback){
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter(feedback => feedback.id !== Number(id));
        return feedbackArray.length < initialLength;
    }
    return false;
}

if (require.main === module) {
    let result = addOne("John Smith", "message:", "Great session on React components! I found the examples very helpful.", 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("updateOnebyId called:", updateOneById(1, {sender: "Jane Doe"}));
    console.log("findByid called after item updated:", findById(1));
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
   }

   Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
   };

   module.exports = Feedback;