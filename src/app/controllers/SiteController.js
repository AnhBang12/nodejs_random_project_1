import { CourseModel } from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";
class SiteController {
  // [GET] /home
  home(req, res, next) {

    CourseModel.find({})
      .then((courses) => {
        res.render('home', { courses: multipleMongooseToObject(courses) })
      })
      .catch(next)


    // res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
