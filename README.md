
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg) ![Build](https://github.com/yavisht/has-key/workflows/Publish%20to%20npm/badge.svg?branch=master)
# HasKey - Does the object have the key?

A simple util that will return true or false if the specified key is present in the object supplied.

## Installation

	// For npm
	npm i @yavisht/has-key 

	// For yarn
	yarn add @yavisht/has-key


## Usage

	const hasKey = require('@yavisht/has-key')
	
	// returns true
	console.log(hasKey({foo:'bar'}, 'foo'))
	
	// returns false
	console.log(hasKey({foo:'bar'}, 'bar'))
