import assert from 'assert'
import Product from './product'
import Service from './service'

// should throw an error when deeescription is less than 5 characters long
{
    const params = {
        description: 'my product', 
        id: 1, 
        price: 10000 
    }

    const product = new Product({
        onCreate: () => {},
        service: new Service()
    })
    assert.rejects(
        () => product.create(params),
        {message: 'description must be higher than 5'},
        'it should thorw an error with wrong description'
    )
}