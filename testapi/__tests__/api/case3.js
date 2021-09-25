const frisby = require('frisby');

it('should create new user', function () {
    return frisby
        .post('http://reqres.in/api/users', {
                name: 'vladlen',
                job: 'AQA'
            })
        .expect('status', 200);
});

it('should get and update user #12', function () {
    return frisby
        .get('http://reqres.in/api/users/12')
        .expect('status', 200)

        .put('http://reqres.in/api/users/12', {
            name: 'Johny',
            job: 'umbrella corp'
    })
        .expect('status', 200)

});

it('should delete user #12', function () {
    return frisby
        .delete('http://reqres.in/api/users/12')
        .expect('status', 204)
});


