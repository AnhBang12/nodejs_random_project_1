import { CourseModel } from '../models/Course.js';
import { mongooseToObject, multipleMongooseToObject } from '../../util/mongoose.js';
class CourseController {

  show(req, res, next) {
    //[GET] /courses/:slug
    CourseModel.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) })
      }).catch(next)
  }
}

export default new CourseController();
