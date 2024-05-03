const {check}=require('express-validator')
exports.categoryValidator=[
    check('name',"category name is required").not().isEmpty()
]
exports.deleteCategoryValidator=[
    check('id',"id is required for deletion.")
]