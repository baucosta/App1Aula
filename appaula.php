<?php

    header('Access-Control-Allow-Origin: *');

    foreach($_POST as $chave=>$valor) $$chave = $valor;

    $categoriasMusicas = array(
        array('id'=>1,'title'=>'Funk'),
        array('id'=>2,'title'=>'Rap'),
        array('id'=>3,'title'=>'Gospel'),
        array('id'=>4,'title'=>'Sertanejo'),
        array('id'=>5,'title'=>'Reggae')
    );

    // echo json_encode($categoriasMusicas);
    print_r($_POST);
?>