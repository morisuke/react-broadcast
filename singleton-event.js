const SINGLETON_PROP     = Symbol();
const SINGLETON_ENFORCER = Symbol();

import Event from 'events';
class SingletonEvent extends Event.EventEmitter
{
	constructor(enforcer) {
		super();

        if ( enforcer != SINGLETON_ENFORCER ) {
            throw new Error( 'Cannot construct singleton' );
        }
	}

	static get instance() {
		if (! (this[ SINGLETON_PROP ])) {
            this[ SINGLETON_PROP ] = new SingletonEvent( SINGLETON_ENFORCER );
        }
        return this[ SINGLETON_PROP ];
	}
	
	broadcast(event, callback) {
		this.emit(event, callback);
	}
}

export default SingletonEvent.instance;
