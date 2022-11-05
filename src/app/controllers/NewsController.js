class NewsController {
  // [GET] news
  index(req, res) {
    res.render('news');
  }

  //[GET] news/:slug
  show(req, res) {
    res.send('new Detail');
  }
}

export default new NewsController();
