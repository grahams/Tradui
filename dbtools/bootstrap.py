################################################################################
# Pictographs ::
#   Keyed on the english word
Pictographs = {
    'bandage':      'Bandage.png',
    'bandaid':      'Bandage.png',
    'first aid':    'FirstAid.png',
    'food':         'Food.png',
    'hospital':     'Hospital.png',
    'water':        'Water.png',
}

# Sounds ::
#   Keyed on the english word
Sounds = {
    'bandage':      'creole-female-band-aid.mp3',
    'bandaid':      'creole-female-band-aid.mp3',
    'telephone':    'creole-female-phone.mp3',
    'rescue':       'creole-female-search-and-rescue.mp3',
    'doctor':       'creole-female-doctor.mp3',
    'first aid':    'creole-female-first-aid.mp3',
    'hospital':     'creole-female-hospital.mp3',
    'water':        'creole-female-water.mp3',
}

# Path to sqlite3
SQLite3 = '/usr/local/bin/sqlite3'
################################################################################
from subprocess import *
from tradui_dict import *

SQLITE_TEMPLATE = """PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE DICTIONARY (CREOLE TEXT, ENGLISH TEXT, PICTOGRAPH TEXT, AUDIO TEXT);
%s
COMMIT;
"""

def build_sql(dbname):
    sql = 'INSERT INTO "DICTIONARY" VALUES(\'%s\', \'%s\', %s, %s);\n'
    txt = ''
    for tup in DICTIONARY:
        vals = [tup[0], tup[1], 'NULL', 'NULL']
        if tup[1] in Pictographs:
            vals[2] = '"%s"' % Pictographs[tup[1]]
        if tup[1] in Sounds:
            vals[3] = '"%s"' % Sounds[tup[1]]
        txt += sql % tuple(vals)
    sql = SQLITE_TEMPLATE % txt
    cmd = "%s %s" % (SQLite3, dbname)
    pipe = Popen(cmd, shell=True, stdin=PIPE).stdin
    pipe.write(sql)
    pipe.close()

if __name__ == '__main__':
    build_sql("tradui.db")


