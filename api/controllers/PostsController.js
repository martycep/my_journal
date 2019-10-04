//dummy database 
const post1 = {id: 1, title: "Post Title 1", body: "Here is my body, do with it what you want."}
const post2 = {id: 2, title: "Post Title 2", body: "Body"}
const post3 = {id: 3, title: "Post Title 3", body: "Body3"}

const allPosts = [post1, post2, post3]

module.exports = {
    posts: function(req, res) {
        //JSON and API Endpoints
        res.send([allPosts])
    }, 

    create: function(req, res) {
        const title = req.param("title")
        const body = req.param("body")

        //need to test 
        console.log(title + " " + body)
        //allows you to toggle debug statements easily
        sails.log.warn(title + " " + body)

        const newPosts = {id: 4, 
            title: title, 
            body: body}
        allPosts.push(newPosts)

        res.end()
    }, 

    findById: function(req, res) {
        const postId = req.param('postId')

        //filter function
        const filteredPosts = allPosts.filter(p => {return p.id == postId})

        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        }
        else {
            res.send("Failed to find post by id: " + postId)
        }
    
        res.send(postId)
    }
}