This is a simple python script that integrates English words with
their Creole translations and optional Pictographs and Utterances in Creole.

- To add a new Creole word, edit tradui_dict.py, and add the word with its
  English translation.

- To add a new Pictograph, edit bootstrap.py, and add the name of the
  Pictograph to the Pictograph dictionary, keyed by its English name.

- To add a new Utterance in Creole, edit bootstrap.py, and add the name of the
  MP3 sample to the Sounds dictionary, keyed by its English name.

- You will need a sqlite3 command line db engine to use this script.  Edit
  bootstrap.py, and point the "SQLite3" variable to the path of your sqlite3
  command line db engine. 

- Once you run bootstrap.py, you will generate a SQLite3 db file named
  "tradui.db".  Move this into the Resources directory.
