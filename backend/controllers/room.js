const Rooms = require("../models/room")

exports.addData = async (req, res) => {
    try {
        const { roomId, code } = req.body;
        console.log(roomId, code);

        var existingRoom = await Rooms.findOne({ roomId });

        if (!existingRoom) {
          existingRoom=new Rooms({roomId,code})
        }

        // If the room is found, update the code
        existingRoom.code = code;
        const updatedRoom = await existingRoom.save();

        return res.status(200).json({ data: updatedRoom });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};




exports.getData=(req,res)=>{

    const {roomId}=req.body

    Rooms.find({roomId}).then(data=>{

        if(!data){
            return res.status(400).json({"error":err})
        }
        return res.status(200).json({"data":data})


    }).catch((err)=>{
        return res.status(400).json({"error":err})
    })

}