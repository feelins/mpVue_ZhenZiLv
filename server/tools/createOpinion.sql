drop table if exists `opinions`;

create table `opinions`(
    `id` int(11) not null auto_increment,
    `openid` varchar(100) not null,
    `src` text default null,
    `wechat` varchar(100) default null,
    `opinion` text not null,
    `create_time` timestamp not null default CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`)
)default charset=`utf8`;