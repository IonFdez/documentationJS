<?php

/**
 * Class Project
 *
 * This class represents a sample project for documentation purposes.
 */
class Project
{
    /**
     * The name of the project.
     *
     * @var string
     */
    public $name;

    /**
     * Constructor for the Project class.
     *
     * @param string $name The name of the project.
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * Returns a greeting message with the project name.
     *
     * @return string The greeting message.
     */
    public function getGreeting()
    {
        return "Welcome to the project: " . $this->name;
    }
}