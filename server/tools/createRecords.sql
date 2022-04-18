drop table if exists `records`;

create table `records`(
    `id` int(11) not null auto_increment,
    `openid` varchar(100) not null,
    `add` int(11) not null,
    `mark` int(11) not null,
    `note` varchar(100) default null,
    `create_time` timestamp not null default CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`)
)default charset=`utf8`;