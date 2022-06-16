import {EventEmitter} from 'events'
export default class Product {
    constructor ({
        onCreate,
        service
    }) {
        this.service = service
        this.source = new EventEmitter()
        this.source.on('create', onCreate)
    }
    //{ description, id, price }
    #isValid(data) {
        if(data.description.length < 5) {
            throw new Error('description must be higher than 5')
        }
    }

    async create(data) {
        this.#isValid(data)
        const message = await this.service.save(data)
        return message.toUpperCase()
    }

}

//Parei no minuto 18:20 do curso:
//https://www.youtube.com/watch?v=8hxhZkBzWhk