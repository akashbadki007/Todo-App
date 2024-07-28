const Todo = require("../Models/Todo");


exports.deleteTodo = async(req,res) => {

    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        console.log("Deleted Todo Here --->> ",Todo);

        res.status(200).json(
            {
                success:true,
                data:Todo,
                message:"Todo Deleted"
            }
        )
    }

    catch(err) {
        console.error(err)
        res.status(500).json(
            {
                success:false,
                error:err.message,
                data:"Server Error"
            }
        )
    }
}