﻿#pragma strict

var speed:float;

function Start () {

}

function Update () {
	transform.Translate(Vector3.up * speed * Time.deltaTime);
}