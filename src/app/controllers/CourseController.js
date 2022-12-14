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
    res.render('courses/create');
  }

  //[POST] /courses/store
  store(req, res, next) {
    // res.json(req.body)
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new CourseModel(req.body)
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch((e) => { })
  }

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    CourseModel.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    CourseModel.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  //[DELETE] /courses/:id
  destroy(req, res, next) {
    CourseModel.delete({ _id: req.params.id })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }

  //[DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    CourseModel.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }

  //[PATCH] /courses/:id/restore
  restore(req, res, next) {
    CourseModel.restore({ _id: req.params.id })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }
}

export default new CourseController();
