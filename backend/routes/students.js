const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error', err));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const stream = req.body.stream;

    const newStudent = new Student({
        name,
        email,
        phone,
        stream,
    });

    newStudent.save()
        .then(() => res.json('Student details added successfully'))
        .catch(err => res.status(400).json('Error', err));
});

router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(student => res.json('Student details deleted successfully'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.name = req.body.name;
            student.email = req.body.email;
            student.phone = Number(req.body.phone);
            student.stream = req.body.stream;

            student.save()
                .then(() => res.json('Student updated successfully'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;