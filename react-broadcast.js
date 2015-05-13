import React from 'react';
import Event from './singleton-event';
export default class ReactBroadcast extends React.Component
{
	constructor(){
		super();
		this.event = Event;
	}
}
