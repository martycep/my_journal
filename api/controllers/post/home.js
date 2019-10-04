module.exports = async function(req,res) {
    console.log("This route shows home page of posts")

    const allPosts = await Post.find()

    res.view('pages/home',
        {allPosts}
    )
    //ejs --> type of js that loads stuff dynamically
}