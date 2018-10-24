set -x

ls -lah

sshpass -e scp -r ./public/. travis@wilcoxlab.uw.edu:/opt/wilcoxlab/www/
