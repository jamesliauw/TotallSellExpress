// CRUD 增删改查 SQL语句
var user = {
    
    // 插入数据
    insert: "INSERT INTO user(id, name, age, password) VALUES(0, ?, ?, ?)",
    
    // 更新数据
    update: "UPDATE user set name=?, age=? WHERE id=?",
    
    // 删除数据
    delete: "DELETE FROM user WHERE id=?",
    
    // 查询BY ID
    queryById: "SELECT * FROM user where id=?",
    
    // 查询所有
    queryAll: "SELECT * FROM user",

    // 用户登录
    loginUser: "SELECT id, name, password FROM user where name=?",
};

module.exports = user;
