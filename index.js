
const { Sequelize, DataTypes } = require('sequelize', 'DataTypes')
//toa ket noi,tao mot obj vi sequelize la mot class
const sequelize = new Sequelize('task_management', 'root', 'Anhnhoemnhieulam1', {
    host: 'localhost',
    dialect: 'mysql'
})
//sequelize có thể là tên khác
//check xem ket noi thanh cong chua
const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Ket noi thanh cong');
    } catch (err) {
        console.log(err)
        console.log("Ket noi that bai")
    }
}
checkConnect();
///tao model
const Task = sequelize.define("TenModel", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING
    }
})
const Vinh = sequelize.define("alo", {
    loveyou: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING
    }
})
//tạo
const createTask = async (name, status) => {
    //c1
    // const newTask = Task.build({
    //     name: name,
    //     status: status
    // })
    // const newVinh = Vinh.build({
    //     loveyou: "hoc nodejs",
    //     status: "open"
    // })
    // await newTask.save();
    // await newVinh.save();


    //c2
    //create là kết hợp giữa build và save
    const newTask = await Task.create({
        name: 'reactjs',
        status: 'fisnish'
    })
    const newVinh = await Vinh.create({
        loveyou: 'reactjs',
        status: 'fisnish'
    })
}
createTask('react','finished')
//lấy cả
const getAll = async () => {
    const taskList = await Task.findAll();//dư liêu lấy về chưa phải json
    const vinhList = await Vinh.findAll();
    console.log(JSON.stringify(taskList, null, 2));
    console.log(JSON.stringify(vinhList, null, 2));
}
// getAll();
//lấy có điều kiện
const getTaskById = async () => {
    const task = await Task.findOne({
        where: {
            id: 2
        }
    })
    console.log(JSON.stringify(task, null, 2))
}
// getTaskById();

//update có điều kiện
const updateTaskById = async () => {
    const task = await Task.update({
        name: 'vinh',
        status: 'fisnish'
    }, {
        where: {
            id: 2
        }
    })
    console.log(JSON.stringify(task, null, 2))
}
// updateTaskById();

//Xoá có điều kiên
const deleteById=async ()=>{
    await Task.destroy({
        where:{
            id:1
        }
    })
}
// deleteById();

// dong bo model,tao bang
const syncModel = async () => {
    await Task.sync({ force: true })//xoa bang cu va tao bang moi;
    await Vinh.sync({ force: true })//xoa bang cu va tao bang moi;
    // Task.sync({alter:true})//sua bang cu thanh bang moi
    console.log("Da dong bo model TenModel");
    console.log("Da dong bo model alo");
}
// syncModel();
// createTask()


