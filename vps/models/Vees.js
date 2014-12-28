var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Vees Model
 * ==========
 */

var Vees = new keystone.List('Vees');

Vees.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Vees.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

Vees.relationship({ ref: 'Post', path: 'author' });


/**
 * Registration
 */

Vees.defaultColumns = 'name, email, isAdmin';
Vees.register();
