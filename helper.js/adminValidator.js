const {check}=require("express-validator");
exports.permissionValidation=[
    check('permission_name',"Name of the permission is required").not().isEmpty()
]
exports.deletePermissionValidator=[
    check('id',"Id of the permission is required").not().isEmpty()
]