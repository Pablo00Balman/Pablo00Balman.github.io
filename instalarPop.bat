@echo off

start "" https://iso.pop-os.org/22.04/amd64/intel/32/pop-os_22.04_amd64_intel_32.iso


diskpart
select disk 2
clean
create part pri 
select part 1
format fs=fat32 quick
exit

