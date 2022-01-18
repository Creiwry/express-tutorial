const express = require('express');
const {getPeople,
    createPerson,
    createPersonPostman,
    updatePeople,
    deletePeople} = require('../controllers/people')

const router = express.Router();

/* 
router.get('/', getPeople)
router.post('/', createPerson)
router.post('/postman', createPersonPostman)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)
 */

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePeople).delete(deletePeople)

module.exports = router;