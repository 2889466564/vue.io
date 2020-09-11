let data = require("./Mock/mock")

module.exports = {
    lintOnSave: false,
    devServer: [
        app.get("/getList", (req, res) => {
            res.send(data.list)
        })
    ]

}