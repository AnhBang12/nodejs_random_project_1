import { CourseModel } from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';
class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    CourseModel.find({})
      .then((courses) => {
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /trash/courses
  trashCourses(req, res, next) {
    CourseModel.findDeleted({})
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

export default new MeController();
