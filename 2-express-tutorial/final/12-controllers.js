
const express = require('express')
const router = express.Router()

const {
    deletePerson,
    updatePerson,
    createPersonPostman,
    createPerson,
    getPeople,
} = require('./controllers/people.js')


// router.get('/', getPeople)
// router.post('/postman', createPersonPostman)
// router.post('/', createPerson)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router