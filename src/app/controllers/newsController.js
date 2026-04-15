class NewsController {
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('News detail ' + req.params.slug);
  }
}

module.exports = new NewsController();
