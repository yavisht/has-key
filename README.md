
![Release](https://github.com/yavisht/has-key/workflows/Release/badge.svg?branch=master) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/yavisht/has-key?style=flat-square) ![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg) 

# HasKey - Does the object have the key?

A simple util that will return true or false if the specified key is present in the object supplied.

## What's New?
 - Package now available on NPM and Github Package Registry
 
## Installation

	// NPM
	npm i @yavisht/has-key 

	// Yarn
	yarn add @yavisht/has-key


## Usage
	// require example
	const hasKey = require('@yavisht/has-key')
	
	// import example 
	import hasKey from '@yavisht/has-key'

	// returns true
	console.log(hasKey({foo:'bar'}, 'foo'))
	
	// returns false
	console.log(hasKey({foo:'bar'}, 'bar'))
