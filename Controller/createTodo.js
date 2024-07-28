const Todo = require('../Models/Todo');

// Define Route Handler...
exports.createTodo = async (req,res) => {

    try {
        // extract title, description from request body.
        const {title,description} = req.body;
        // create new todo object and insert into DB..
        const response = await Todo.create({title,description});
        console.log("Created Todo Here --->> ",response);
        // send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        });
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }
}