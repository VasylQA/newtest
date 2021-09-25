const frisby = require('frisby');
const expected = 'vodka';

it ('check there is NO “bourbon” or “whiskey” in the cocktails', function () {
    return frisby.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['_body']);
            for (let i = 0; i < data.drinks.length; i++ ){
            console.log(data.drinks[i]['strDrink']);
            expect(data.drinks[i]['strDrink']).not.toBe('Bourbon');
            expect(data.drinks[i]['strDrink']).not.toBe('Whiskey');
            }
        });
});

it ('validate all cocktail names include “vodka”', function () {
    return frisby.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['_body']);
            for (let i = 0; i < data.drinks.length; i++ ){
                console.log(data.drinks[i]['strDrink'].toLowerCase());
                expect(data.drinks[i]['strDrink'].toLowerCase()).toContain(expected);
            }
        });
});

it ('validate every cocktail has instruction in Italian language', function () {
    return frisby.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['_body']);
            for (let i = 0; i < data.drinks.length; i++ ){
                console.log(data.drinks[i]['strInstructionsIT']);
                expect(data.drinks[i]['strInstructionsIT']).not.toBeUndefined();
                expect(data.drinks[i]['strInstructionsIT']).not.toBeNull();
            }
        });
});

