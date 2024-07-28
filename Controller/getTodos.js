const Todo = require("../Models/Todo");

exports.getTodos = async(req,res) => {

    try {
        const todos = await Todo.find({});
        console.log("Get All Todos -->> ",todos);

        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Data Fetch Successfully.."
            })
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

exports.getTodoById = async (req,res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        console.log("Single Todo Here --->> ",todo);
        
        if(!todo) {
            return res.status(404).json(
                {
                    success:false,
                    message:"No Data Found With Given ID"
                }
            )
        }

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched...`
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