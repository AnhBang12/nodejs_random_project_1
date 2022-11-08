import { CourseModel } from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js';

class CourseController {

  //[GET] /courses/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create')

  }

  //[POST] /courses/store
  store(req, res, next) {
    // res.json(req.body)
    const formData = req.body
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new CourseModel(formData)

    course.save()
      .then(() => res.redirect('/'))
      .catch((e) => { })
  }
}

export default new CourseController();
